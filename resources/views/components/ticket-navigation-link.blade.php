@props(['label', 'route', 'colorClass'])

<a href="{{ $route }}" class="py-2 px-4 rounded-md {{ $colorClass ?? 'bg-gray-200' }} hover:bg-gray-300 text-xs text-gray-800">{{ $label }}</a>
