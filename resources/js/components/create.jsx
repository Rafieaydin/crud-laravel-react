import { useState } from "react";
import axios, { Axios } from "axios";
import {useNavigate, Link}  from 'react-router-dom';

const create = () => {

    const [getJudul, setJudul] = useState('');
    const [getDeskripsi, setDeskripsi] = useState('');
    const go = useNavigate();

    const PostData = (e) => {
        e.preventDefault();
        var data = {
            'judul' : getJudul,
            'deskripsi' : getDeskripsi
        }
        console.log(data);
        axios.post('http://127.0.0.1:8000/api/post/store', data).then(res => {
            go('/');
            console.log(res.data);
        }).catch(err => {

        })
    }
    console.log(getJudul);
    return (
        <div className="container mx-auto px-8 rounded mt-8">
        <h1 className="text-3xl text-center font-bold mt-8 mb-5 ">Crud React js & laravel</h1>
        <div className="block p-6 rounded-lg shadow-lg bg-white">
  <form onSubmit={PostData}>
    <div className="form-group mb-6">
      <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
        onChange={(e) => setJudul(e.target.value)}
        placeholder="Judul" />
    </div>
    <div className="form-group mb-6">
      <textarea
      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      onChange={(e) => setDeskripsi(e.target.value)}
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="Deskripsi"
    />
    </div>
    <div className="flex justify-end">
    <Link to="/" className="
        px-6
        py-2.5
        mr-3 mx-auto
        bg-yellow-600
        text-white
        font-medium
        uppercase
        rounded
        shadow-md
        hover:bg-yellow-700 hover:shadow-lg
        focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-yellow-800 active:shadow-lg
        transition
        duration-150
        ease-in-out max-wd-md">Kembali</Link>
    <button type="submit" className="
        px-6
        py-2.5
        bg-green-600
        text-white
        font-medium
        uppercase
        rounded
        shadow-md
        hover:bg-green-700 hover:shadow-lg
        focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-green-800 active:shadow-lg
        transition
        duration-150
        ease-in-out max-wd-md">Submit</button>
    </div>
  </form>
</div>
        </div>
    )
}

export default create;
