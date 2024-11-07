@props(['name', 'options'])

<select name="{{ $name }}" id="{{ $name }}" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50" onchange="window.location.href=this.value">
    <option value="{{ clearQueryString($name) }}">-- SELECT {{ strtoupper($name) }} --</option>
    @foreach($options as $value => $label)
        <option value="{{ toggle($name, $value) }}" @selected($value == request($name))>{{ $label }}</option>
    @endforeach
</select>
