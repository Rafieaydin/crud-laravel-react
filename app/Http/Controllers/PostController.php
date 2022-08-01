<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index(){
        $post = Post::all();
        return response()->json(['post'=>Post::all()]);
    }

    public function store(Request $request){
        Post::create([
            'judul' => $request->judul,
            'deksripsi' => $request->deskripsi
        ]);

        return response()->json(["success"=>"data berhasil di tambahkan"],202);
    }

    public function getbyid($id){
        return response()->json(["post"=>Post::find($id)],202);
    }

    public function update(Request $request,$id){
        Post::where('id', $id)->update([
            'judul' => $request->judul,
            'deksripsi' => $request->deskripsi
        ]);

        return response()->json(["success"=>"data berhasil di update"],202);
    }

    public function delete($id){
        // Post::find($id)->delete();
        return response()->json(["post"=>Post::destroy($id)],202);
    }
}
