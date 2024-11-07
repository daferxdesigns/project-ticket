@props(['status'])

@php
$statusOptions = [
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
$defaultOption = [
    'label' => 'Default Action',
    'color' => 'bg-gray-400',
    'route' => '#',
];

$status = strtolower($ticket->status);
$statusOption = $statusOptions[$status] ?? $defaultOption;
@endphp

<a href="{{ $statusOption['route'] }}" class="py-2 px-4 {{ $statusOption['color'] }} hover:bg-opacity-75 text-white rounded-md">
    {{ $statusOption['label'] }}
</a>
