import Profile from './сomponents/Profile/Profile'
import userData from "./userData.json";
import FriendList from './сomponents/FriendList/FriendList';
import friendsData from "./friends.json"
import TransactionHistory from './сomponents/TransactionHistory/TransactionHistory';
import transactions from './transaction.json'

export default function App() {
  return(
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </>
  )
}