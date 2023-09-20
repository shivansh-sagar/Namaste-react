import { useRouteError } from "react-router-dom";
const Error =()=>{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1 className=" text-3xl text-green-500">Oops!!</h1>
            <h2>Something Went Wrong</h2>
            <h3>status:{err.status}</h3>
        </div>
    )
}

export default Error;