import { useState, useEffect } from "react";

const { DateTime } = require("luxon");

export const getDate = ({post}) => {
    const [postDate, setPostDate] = useState("");
    console.log(post)

    useEffect(() => {
        let dt = DateTime.fromISO(post)
        setPostDate(() => dt.toLocaleString(DateTime.DATETIME_MED))
    }, []);

    return postDate;
}