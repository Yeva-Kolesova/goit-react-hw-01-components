import {
  ProfileWrap,
  Description,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  Item,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <ProfileWrap>
      <Description>
        <Image src={avatar} alt="user image" />
        <Name>{username}</Name>
        <Tag>&#65131;{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <Item>
          <span>Followers</span>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <span>Views</span>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <span>Likes</span>
          <Quantity>{likes}</Quantity>
        </Item>
      </Stats>
    </ProfileWrap>
  );
};
