import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
  VStack,
  Heading,
} from '@chakra-ui/react';

const allLectures = [
  {
    name: 'A',
    video_name:"1.Getting started",
    url: 'https://www.youtube.com/watch?v=1Jy23XfKwG8&list=PLkxTRam6E2V-okv6gwQlt6dLTsn0v6CD1&index=1',
    nextSuccess: 'B',
    nextAlternative: null,
    timestampNotes: [
      {
        text: 'Masai School is a new age school!',
        url: '',
        startTimestamp: 10,
        endTimestamp: 20,
      },
      {
        text: 'Python is an famous programming language',
        url: 'python.org',
        startTimestamp: 20,
        endTimestamp: 30,
      },
    ],
  },
  {
    name: 'B',
    video_name:"2. Marketwatch on Kite",
    url: 'https://www.youtube.com/watch?v=5CNXns5AoHg&list=PLkxTRam6E2V-okv6gwQlt6dLTsn0v6CD1&index=2',
    nextSuccess: 'C',
    nextAlternative: 'A',
    timestampNotes: [
      {
        text: '',
        url: '',
        timestamp: '',
      },
    ],
  },
  {
    name: 'C',
    video_name:"3. Kite Dashboard",
    url: 'https://www.youtube.com/watch?v=uAAwy5aQxBs&list=PLkxTRam6E2V-okv6gwQlt6dLTsn0v6CD1&index=3',
    nextSuccess: 'D',
    nextAlternative: 'B',
    timestampNotes: [
      {
        text: '',
        url: '',
        timestamp: '',
      },
    ],
  },
  {
    name: 'D',
    video_name:"4. Add or Withdraw Funds",
    url: 'https://www.youtube.com/watch?v=sbRnbq99pfI&list=PLkxTRam6E2V-okv6gwQlt6dLTsn0v6CD1&index=5',
    nextSuccess: 'E',
    nextAlternative: 'C',
    timestampNotes: [
      {
        text: '',
        url: '',
        timestamp: '',
      },
    ],
  },
  {
    name: 'E',
    video_name:"Order Placement on Kite",
    url: 'https://www.youtube.com/watch?v=eXMrEMdQWrQ&list=PLkxTRam6E2V-okv6gwQlt6dLTsn0v6CD1&index=6',
    nextSuccess: null,
    nextAlternative: 'D',
    timestampNotes: [
      {
        text: '',
        url: '',
        timestamp: '',
      },
    ],
  },
];

export default function Tutorial() {
  const [lecture, setLecture] = useState(allLectures[0]);
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);
  const id = useRef(null);
  const [played, setPlayed] = useState(0);
  const [validTimeStamps, setValidTimestamps] = useState([]);
  

  const handleSeekChange = (e) => {
    console.log(e);
    setPlayed(parseInt(e, 10));
  };

  const getValidTimestamps = (time) => {
    return (
      lecture?.timestampNotes.filter(
        (item) => item.startTimestamp <= time && item.endTimestamp >= time
      ) ?? []
    );
  };

  const onStart = () => {
    id.current = setInterval(() => {
      console.log(`checking`, ref?.current?.getCurrentTime());
      let time = ref?.current?.getCurrentTime();
      let val = getValidTimestamps(time);
      console.log(`checking`, val);
      setValidTimestamps(val);
      setPlayed(
        (ref.current.getCurrentTime() / ref.current.getDuration()) * 100
      );
    }, 1000);
  };

  const onPause = () => {
    clearInterval(id.current);
    id.current = null;
  };

  const handleLectureChange = (id) => {
    if (!id) {
      return;
    }
    setLecture(allLectures.find((item) => item.name === id) ?? 'A');
    setOpen(false);
  };
  console.log('validTimeStamps:', validTimeStamps);
  return (
    <Container size="xl" paddingTop="100px">
      <Heading>{lecture.video_name}</Heading>

      <ReactPlayer
        ref={ref}
        onPlay={onStart}
        onPause={onPause}
        onDuration={(state) => {
          console.log(state);
          console.log(`oops`);
        }}
        url={lecture.url}
        onEnded={() => {
          setOpen(true);
        }}
        controls={true}
      />

      <Modal onClose={() => setOpen(false)} isOpen={isOpen}>
        <ModalOverlay>
          <ModalContent>
            <ModalBody>
              Click next for next lecture, or alternative if you had doubts
            </ModalBody>
            <ModalCloseButton>Close</ModalCloseButton>
            <ModalFooter>
              {lecture.nextSuccess && (
                <Button
                  onClick={() => handleLectureChange(lecture.nextSuccess)}
                >
                  Next
                </Button>
              )}
              {lecture.nextAlternative && (
                <Button
                  onClick={() => handleLectureChange(lecture.nextAlternative)}
                >
                  WATCH ALTERNATIVE
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
      <Box>
        <Slider
          onChange={handleSeekChange}
          min={0}
          max={100}
          value={played}
          aria-label="slider-ex-1"
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>

      <Box>
        <Button
          disabled={!lecture.nextSuccess}
          onClick={() => handleLectureChange(lecture.nextSuccess)}
        >
          Next
        </Button>
        <Button
        marginLeft="20px"
          disabled={!lecture.nextAlternative}
          onClick={() => handleLectureChange(lecture.nextAlternative)}
        >
          Previous
        </Button>
      </Box>
      <Box>
        {validTimeStamps.map((item) => (
          <VStack>
            <Text>{item.text}</Text>
            <Link to={item.url}>{item.url}</Link>
          </VStack>
        ))}
      </Box>
    </Container>
  );
}
