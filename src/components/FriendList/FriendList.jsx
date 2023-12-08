import { FriendListItem, FriendItem, StatusColor } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <section>
      <FriendListItem>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <StatusColor $isOnline={isOnline} />
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
          </FriendItem>
        ))}
      </FriendListItem>
    </section>
  );
};
