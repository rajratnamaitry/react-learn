# useContext

    Context provids a way to pass data through the component tree without
    having to pass props down manually at every level.

    * Create Context
    * Provide Context
    * Consume Context

```JSX
export const UserContext = React.createContext();
export const UserChannelContext = React.createContext();
 // Parent component
<UserContext.Provider value={'From hook index'}>
    <UserChannelContext.Provider value={'From nasted provider hook index'}>
        <Bcomp></Bcomp>
    </UserChannelContext.Provider>
</UserContext.Provider>

// Nasted component
import { UserContext, UserChannelContext } from "./index";

<UserContext.Consumer>
{
    user => {
    return <UserChannelContext.Consumer>{
        channel => {
            return <div>Child receive {user} - {channel}</div>
        }
        }</UserChannelContext.Consumer>
    }
}
</UserContext.Consumer>

// Alternate 
const user = useContext(UserContext);
const channel = useContext(UserChannelContext);
return (
    <div>
        {user} - {channel}
    </div>
)
```
