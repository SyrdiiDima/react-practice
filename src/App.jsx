import Profile from "./components/Profile/Profile";
import Statistics from './components/Statistics/Statistics'
import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
import "./App.css";




export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      </div>
  );
}
