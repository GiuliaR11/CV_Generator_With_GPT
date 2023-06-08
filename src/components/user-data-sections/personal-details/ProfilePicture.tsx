import { Flex, Group, Image, rem, useMantineTheme, Text } from '@mantine/core';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { IconUpload, IconX, IconPhoto } from '@tabler/icons-react';
import { useState } from 'react';

export function ProfilePicture(props: Partial<DropzoneProps>) {
  const theme = useMantineTheme();
  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploadedImage, setUploadedImage] = useState<string>('')

  const handleOnDropFile = (files: any) => {
    console.log(files)
    setUploadedFile(files[0])
    const reader = new FileReader();

    reader.onload = () => {
      console.log('on load')
      if (reader.result) {
        console.log(reader.result);
        setUploadedImage(reader.result as any);
      }
        
    };

    reader.readAsDataURL(uploadedImage as any);
  }

  return (
    <>
      <Dropzone
        onDrop={(files) => handleOnDropFile(files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={3 * 1024 ** 2}
        accept={IMAGE_MIME_TYPE}
        {...props}
      >
        <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              size="3.2rem"
              stroke={1.5}
              color={theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              size="3.2rem"
              stroke={1.5}
              color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto size="3.2rem" stroke={1.5} />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" color="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>
      <Flex justify='center'>
        <Image
          maw={300}
          radius="md"
          src={uploadedImage}
          alt="Random unsplash image"
        />
      </Flex>
    </>
  )
}