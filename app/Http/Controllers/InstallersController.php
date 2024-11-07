<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Installers;
use Illuminate\Support\Facades\DB;
use Spatie\FlareClient\Http\Client;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\EditClienstRequest;
use App\Http\Requests\StoreClientsRequest;
use App\Http\Requests\UpdateInstallersRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class InstallersController extends Controller
{
    public function index()
    {
        return view('installers.index', [
            'installers' => DB::table('installers')
                ->orderBy('id', 'desc')
                ->paginate(100)

        ]);
    }

    public function show($installers_id)
    {
        $installer = Installers::find($installers_id);
        return view('installers.show', compact('installer'));
    }


    public function create()
    {
        $installers = Installers::orderBy('name')->pluck('name', 'id');
        return view('installers.create', compact('installers'));
    }

    public function edit($installers_id)
    {

        $installers = Installers::find($installers_id);
        return view('installers.edit', compact('installers'));
    }


    public function update(UpdateInstallersRequest $request, Installers $installer)
    {

        $this->authorize('update', $installer);
        $installer->update($request->validated());

        return response()->json(['success' => true, 'message' => 'Installer updated successfully.', 'installer' => $installer]);
    }


    public function store(StoreClientsRequest $request)
    {

        $user = Installers::create([

            'name' => $request['name'],
            'lastname' => $request['lastname'],
            'cec_number' => $request['cec_number'],
            'electrical_contractor_number' => $request['electrical_contractor_number'],
            'address' => $request['address'],
            'suburb' => $request['suburb'],
            'postcode' => $request['postcode'],
            'state' => $request['state'],
            'contact_number' => $request['contact_number'],
            'email' => $request['email'],
            'company' => $request['company'],
            'certificate_of_currency' => $request['certificate_of_currency'],
            'expiry_date' => $request['expiry_date'],
            'area' => $request['area'],
            'forklift' => $request['forklift'],
            'note' => $request['note']
        ]);

        return to_route('installers.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Clients  $clients
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $installer_id)
    {

        $installer = Installers::find($installer_id);

        // Check if the client exists
        if (!$installer) {
            return redirect()->route('installers.index')->with('error', 'Instsaller not found.');
        }

        // Delete the client
        $installer->delete();

        return to_route('installers.index');
    }
    public function search(Request $request)
    {
        $query = $request->input('query');

        // Initialize query builder
        $installersQuery = Installers::query();

        // Apply search filter if query is provided
        if ($query) {
            $installersQuery->where('name', 'LIKE', "%$query%")
                ->orWhere('lastname', 'LIKE', "%$query%");
        }

        // Paginate the query results with 10 items per page
        $installers = $installersQuery->paginate(10);

        return view('installers.index', compact('installers'));
    }
}
