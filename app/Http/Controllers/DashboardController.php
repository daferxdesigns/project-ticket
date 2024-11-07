<?php

namespace App\Http\Controllers;

use App\Models\Clients;
use Coderflex\LaravelTicket\Models\Ticket;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $totalTickets = Ticket::count();
        $resolvedTickets = Ticket::resolved()->count();
        $inprogressTickets = Ticket::inprogress()->count();
        $openTickets = Ticket::opened()->count();
        $closedTickets = Ticket::closed()->count();
        $onholdTickets = Ticket::onhold()->count();
        $totalClients = Clients::count();

        return view('dashboard', compact('inprogressTickets','onholdTickets','resolvedTickets','totalTickets', 'openTickets', 'closedTickets','totalClients'));
    }
}