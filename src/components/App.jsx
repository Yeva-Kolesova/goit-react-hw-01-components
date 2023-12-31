import { Profile } from './Profile/Profile';
import { Statistics } from './Statistic/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './Transactions/Transactions';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transations from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transations} />;
    </div>
  );
};
