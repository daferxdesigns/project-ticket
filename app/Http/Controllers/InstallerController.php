<?php

namespace App\Http\Controllers;

use App\Models\Installer;
use App\Http\Requests\StoreInstallerRequest;
use App\Http\Requests\UpdateInstallerRequest;

class InstallerController extends Controller
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
     * @param  \App\Http\Requests\StoreInstallerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreInstallerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Installer  $installer
     * @return \Illuminate\Http\Response
     */
    public function show(Installer $installer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Installer  $installer
     * @return \Illuminate\Http\Response
     */
    public function edit(Installer $installer)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateInstallerRequest  $request
     * @param  \App\Models\Installer  $installer
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateInstallerRequest $request, Installer $installer)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Installer  $installer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Installer $installer)
    {
        //
    }
}
