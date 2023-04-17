import Container from '@/components/Container';
import NewRoomForm from '@/components/NewRoomForm';

export default function CreateRoom() {
  return (
    <Container className='text-lg leading-10'>
      <p>Create a room</p>
      <NewRoomForm />
    </Container>
  );
}
