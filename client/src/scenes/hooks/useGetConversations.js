import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "state/authSlice";
import toast from "react-hot-toast";

const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	const token = useSelector(selectToken);

	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
                const response = await fetch("http://localhost:3001/getUsers", {
                    method: "GET",
                     headers: {
                       "Content-Type": "application/json",
                       "Authorization": `Bearer ${token}`
                     }
                 });
				const data = await response.json();
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations };
};
export default useGetConversations;