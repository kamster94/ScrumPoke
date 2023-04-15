import { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { currentUserAtom } from '@/models/User';

function useUser() {
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [username, setUsername] = useState<string>(currentUser.username);
  const [avatar, setAvatar] = useState<string>(currentUser.avatar);

  useEffect(() => {
    if (currentUser) {
      setUsername(currentUser.username);
      setAvatar(currentUser.avatar);
    }
  }, [currentUser]);

  const usernameForm = {
    username,
    setUsername,
  };

  const avatarForm = {
    avatar,
    setAvatar,
  };

  function updateUser() {
    setCurrentUser({
      ...currentUser,
      username,
      avatar,
    });
  }

  return {
    currentUser,
    updateUser,
    usernameForm,
    avatarForm,
  };
}

export default useUser;
