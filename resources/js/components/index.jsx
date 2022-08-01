import { useState,  useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const index = () => {
    const [getPosts,setPosts] = useState([]);


    const fetch = () => {
        axios.get('http://127.0.0.1:8000/api/post').then(response=>{
            setPosts(response.data.post);

        }).catch(erorr => {
            console.log(erorr);
        })
    }

    useEffect(()=>{
        fetch();

    },[])

    const deleteData = async (id) => {
        await axios.delete('http://127.0.0.1:8000/api/post/'+id).then(response=>{
            fetch();
        }).catch(erorr => {
            console.log(erorr);
        })
    }
    return (
    <div className="container mx-auto px-8">
        <h1 className="text-3xl text-center font-bold mt-8 ">Crud React js & laravel</h1>
        <div className="flex flex-col m-8 ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 rounded-md  mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden  rounded-md drop-shadow-xl mx-8 ">
            <Link to="/create" type="button" className="rounded  inline-block ml-8 px-6 mb-3 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 ">Tambah Data</Link>
                <div className="container px-8">
                <table className="min-w-full text-center ">
                <thead className="border-b bg-gray-800 ">
                    <tr>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        #
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        judul
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        deskripsi
                    </th>
                    <th scope="col" className="text-sm font-medium text-white px-6 py-4">
                        action
                    </th>
                    </tr>
                </thead >
                <tbody>
                {getPosts.map((post,index)=>
                        (
                            <tr className="bg-white border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index+1}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {post.judul}
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {post.deksripsi}
                    </td>
                    <td className="text-sm text-gray-900 font-light ">
                        <Link to={"/edit/" + post.id} type="button" className="rounded mr-2 inline-block px-6 py-2.5 bg-yellow-600 text-white font-medium text-xs leading-tight uppercase hover:bg-yellow-700 focus:bg-yellow-700 ">Edit</Link>
                        <button type="button" onClick={()=>deleteData(post.id)} className="rounded  inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase hover:bg-red-700 focus:bg-red-700 ">Hapus</button>
                    </td>
                    </tr>))}

                </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>

    )

}
export default index;
