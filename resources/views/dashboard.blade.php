<h1>Welcome to Ecommerce Dashboard</h1>
<a href="{{ route('logout') }}">Logout</a>

@if(session('foodpanda_token'))
    {{ session('foodpanda_token') }}
    <iframe
        src="{{ env('FOODPANDA_URL') }}/auth/consume-token?token={{ session('foodpanda_token') }}"
        style="display:none; width:0; height:0; border:0;">
    </iframe>
@endif
