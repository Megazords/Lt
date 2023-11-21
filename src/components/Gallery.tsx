'use client';

import {
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

interface Data {
  data: {
    id: string;
    caption: string;
    media_url: string;
    timestamp: number;
    media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
    permalink: string;
  }[];
  paging: {
    cursors: {
      after: string;
      before: string;
    };
    next: string;
  };
}

export default function Gallery() {
  const getInstagramData = async () => {
    try {
      setLoading(true);
      const url =
        'https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=IGQWRPRE45cUlpNW8taU5CaTYxb3hSRzRIY3J1R0R5ZAkxlQ1Jld3g4SmRWdXo4dnNRQXhXclNTbjZAMRkNuNEQ2QUVUeWR4NlpGQUJiQklyMjRaeUMwemxxVHNwdF9iVm9iM2ZARaWNWNWlMeUZA5QldvTFFwT3ZAqTUEZD';

      const response = await fetch(url, { next: { revalidate: 3600 } });

      if (response) {
        const data = await response.json();

        if (data) {
          setPosts(data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedPost, setSelectedPost] = useState<{
    id: string;
    caption: string;
    media_url: string;
    timestamp: number;
    media_type: string;
    permalink: string;
  } | null>(null);

  useEffect(() => {
    getInstagramData();
  }, []);

  return (
    <>
      <Grid
        gridTemplateColumns={[
          'repeat(3, 141px)',
          'repeat(3, 190px)',
          'repeat(3, 250px)',
          'repeat(3, 309px)',
          'repeat(3, 309px)',
        ]}
        gridTemplateRows={[
          'repeat(1, 141px)',
          'repeat(1, 190px)',
          'repeat(1, 250px)',
          'repeat(1, 309px)',
          'repeat(1, 309px)',
        ]}
        gridColumnGap={['2px', '4px', '4px', '4px', '4px', '4px']}
        gridRowGap={['2px', '4px', '4px', '4px', '4px', '4px']}
        pt="88px">
        {loading && <Text>Loading...</Text>}
        {posts !== null &&
          posts.data.map((item, index) => (
            <>
              {item.media_type === 'IMAGE' && (
                <GridItem
                  cursor="pointer"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedPost(item);
                  }}>
                  <Image
                    w="100%"
                    h="100%"
                    key={index}
                    src={item.media_url}
                    objectFit="cover"
                  />
                </GridItem>
              )}
              {item.media_type === 'VIDEO' && (
                <GridItem
                  cursor="pointer"
                  onClick={() => {
                    setIsOpen(true);
                    setSelectedPost(item);
                  }}>
                  <video
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'black',
                      objectFit: 'cover',
                    }}
                    muted
                    autoPlay
                    loop
                    src={item.media_url}></video>
                </GridItem>
              )}
            </>
          ))}
      </Grid>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} isCentered>
        <ModalOverlay />
        <ModalContent color="black">
          <ModalHeader _focus={{ border: 'none' }}>
            <ModalCloseButton />
          </ModalHeader>

          <ModalBody>
            <>
              {selectedPost?.media_type === 'IMAGE' && (
                <Image
                  w="100%"
                  h="100%"
                  src={selectedPost.media_url}
                  objectFit="cover"
                />
              )}
              {selectedPost?.media_type === 'VIDEO' && (
                <video
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'black',
                    objectFit: 'cover',
                  }}
                  controls
                  autoPlay
                  loop
                  src={selectedPost.media_url}></video>
              )}
            </>
          </ModalBody>

          <ModalFooter>{selectedPost?.caption}</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
