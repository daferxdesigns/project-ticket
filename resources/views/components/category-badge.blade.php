@props(['name'])

@php
$categoryColors = [
    'Technical' => 'bg-blue-500',
    'Customer Support' => 'bg-yellow-500',
    'Sales' => 'bg-green-500',
    // Add more categories and colors as needed
];

$defaultColor = 'bg-gray-500'; // Default color if category not found
@endphp

<span {{ $attributes->merge(['class' => 'inline-block px-2 py-1 text-xs font-semibold text-white rounded-full ' . ($categoryColors[$name] ?? $defaultColor)]) }}>
    {{ $name }}
</span>
