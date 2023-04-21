import Container from '@/components/Container';
import Button from '@/components/Button';

export default function Home() {
  return (
    <Container className='text-lg leading-10'>
      <p>This is a scrum poker app. It helps development teams (and other types of teams as well) estimate points for tasks.</p>
      <p>All users in specific game room vote on points in secret from another users, and then votes are revealed all at once.</p>
      <p>You can read more about scrum poker (or planning poker) on <a href='https://en.wikipedia.org/wiki/Planning_poker' target='_blank' className='text-accent'>Wikipedia article</a> </p>
      <Button className='btn-ghost normal-case text-xl' link='/room/create'>Create a room</Button>
      <Button className='btn-ghost normal-case text-xl' link='/room/join'>Join a room</Button>
    </Container>
  );
}
