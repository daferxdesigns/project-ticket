<?php

namespace App\Http\Controllers;

use App\Models\OutstandingJobs;
use App\Http\Requests\StoreOutstandingJobsRequest;
use App\Http\Requests\UpdateOutstandingJobsRequest;

class OutstandingJobsController extends Controller
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
     * @param  \App\Http\Requests\StoreOutstandingJobsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreOutstandingJobsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OutstandingJobs  $outstandingJobs
     * @return \Illuminate\Http\Response
     */
    public function show(OutstandingJobs $outstandingJobs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OutstandingJobs  $outstandingJobs
     * @return \Illuminate\Http\Response
     */
    public function edit(OutstandingJobs $outstandingJobs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateOutstandingJobsRequest  $request
     * @param  \App\Models\OutstandingJobs  $outstandingJobs
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateOutstandingJobsRequest $request, OutstandingJobs $outstandingJobs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OutstandingJobs  $outstandingJobs
     * @return \Illuminate\Http\Response
     */
    public function destroy(OutstandingJobs $outstandingJobs)
    {
        //
    }
}
