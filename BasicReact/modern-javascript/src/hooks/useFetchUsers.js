import { useState } from "react";

export const useFetchUsers = () => {
    const [userList, setUserList] = useState ([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {
        setIsError(true);
        setIsLoading(false);

        axios
            .get("https://example.com/users")
            .then(result => {
                const users = result.data.map(user => ({
                    id: user.id,
                    name: `${user.lastname} ${user.firstname}`,
                    age: user.age
                }))
            })
            //에러가 발생하면 에러 플래그 on
            .catch(() => setIsError(true))
            // 처리가 완료된 뒤에는 로딩 플래그 off
            .finally(() => setIsLoading(false));
    }

    return { userList, isLoading, isError, onClickFetchUser};
}