
export default function Userlist(props) {

    return (<ol>


{props.userProps.map(function(user,index){
            return<li>{user.name}</li>
        })}

    </ol>
    );
}
