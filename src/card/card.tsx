// import { useQuery } from "@tanstack/react-query";
// import { getUsers } from "../api/get/get-users";

// const UserCard = () => {
//   const { data , isLoading, error, refetch } = useQuery({
//     queryKey: ["users"],
//     queryFn: getUsers,
//     staleTime: 5 * 60 * 1000, // 5 минут
//     gcTime: 10 * 60 * 1000, // 10 минут (раньше cacheTime)
//     retry: 3,
//     refetchOnWindowFocus: false,
//   });

//   if (isLoading) return <div>Load...</div>;
//   if (error) return <div>Error</div>;
//   if (!data?.length) return <div>None</div>;

//   return (
//     <div>
//       {data.map((item) => (
//         <div>{item.age}</div>
//       ))}
//     </div>
//   );
// };

// export default UserCard;
