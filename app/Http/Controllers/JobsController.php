<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use App\Models\Clients;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Requests\StoreJobsRequest;
use App\Http\Requests\UpdateJobsRequest;

class JobsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('jobs.index', [
            'jobs' => DB::table('jobs')
                ->orderBy('id', 'asc')
                ->paginate(100)

        ]);
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
     * @param  \App\Http\Requests\StoreJobsRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreJobsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function show(Jobs $jobs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function edit(Jobs $jobs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateJobsRequest  $request
     * @param  \App\Models\Jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateJobsRequest $request, Jobs $jobs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Jobs  $jobs
     * @return \Illuminate\Http\Response
     */
    public function destroy(Jobs $jobs)
    {
        //
    }

    public function search(Request $request)
    {
        $query = $request->input('query');

        // Initialize query builder
        $jobsQuery = Jobs::query();


        // Apply search filter if query is provided
        if ($query) {
            $jobsQuery->where('client_name', 'LIKE', "%$query%")
                ->orWhere('address', 'LIKE', "%$query%");
        }

        // Paginate the query results with 10 items per page
        $jobs = $jobsQuery->paginate(10);

        return view('jobs.index', compact('jobs'));
    }
}
