@props(['ticket'])

@php
die('test')
$statusActions = [
    'open' => [
        'label' => 'Open',
        'color' => 'bg-blue-400',
        'route' => route('tickets.index', ['status' => 'open']),
    ],
    'closed' => [
        'label' => 'Closed',
        'color' => 'bg-red-500',
        'route' => route('tickets.index', ['status' => 'closed']),
    ],
    'in_progress' => [
        'label' => 'In Progress',
        'color' => 'bg-yellow-300',
        'route' => route('tickets.index', ['status' => 'in_progress']),
    ],
    'on_hold' => [
        'label' => 'On Hold',
        'color' => 'bg-gray-600',
        'route' => route('tickets.index', ['status' => 'on_hold']),
    ],
    'resolved' => [
        'label' => 'Resolved',
        'color' => 'bg-green-500',
        'route' => route('tickets.index', ['status' => 'resolved']),
    ],
];

// Default action if status not found
$defaultAction = [
    'label' => 'Default Action',
    'color' => 'bg-gray-400',
    'route' => '#',
];

$status = strtolower($ticket->status);
$action = $statusActions[$status] ?? $defaultAction;
@endphp

<a href="{{ $action['route'] }}" class="py-2 px-4 {{ $action['color'] }} hover:bg-opacity-75 text-white rounded-md">
    
