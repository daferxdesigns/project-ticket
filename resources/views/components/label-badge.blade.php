@props(['name'])

@php
$labelColors = [
    'System Issues' => 'bg-orange-500',
    'Replacement' => 'bg-green-500',
    // Add more labels and colors as needed
];

$defaultColor = 'bg-gray-500'; // Default color if label not found
@endphp

<span {{ $attributes->merge(['class' => 'inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ' . ($labelColors[$name] ?? $defaultColor)]) }}>
    {{ $name }}
</span>
