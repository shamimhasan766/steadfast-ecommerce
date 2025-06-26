<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function Index(){
        $foodpanda_token = session('foodpanda_token');
        return Inertia::render('dashboard', ['foodpanda_token' => $foodpanda_token]);
    }
}
