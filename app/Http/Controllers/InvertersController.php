<?php

namespace App\Http\Controllers;

use App\Models\Inverters;
use App\Http\Requests\StoreInvertersRequest;
use App\Http\Requests\UpdateInvertersRequest;

class InvertersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreInvertersRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInvertersRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Inverters  $inverters
     * @return \Illuminate\Http\Response
     */
    public function show(Inverters $inverters)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Inverters  $inverters
     * @return \Illuminate\Http\Response
     */
    public function edit(Inverters $inverters)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInvertersRequest  $request
     * @param  \App\Models\Inverters  $inverters
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInvertersRequest $request, Inverters $inverters)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Inverters  $inverters
     * @return \Illuminate\Http\Response
     */
    public function destroy(Inverters $inverters)
    {
        //
    }
}
