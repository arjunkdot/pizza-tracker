<?php

namespace App\Http\Controllers;

use App\Models\Pizza;
use Inertia\Inertia;
use Illuminate\Http\Request;

class PizzaController extends Controller
{
    public function index() {
        $pizzas = Pizza::all();

        return Inertia::render('Pizzas/All', [
            'pizzas' => $pizzas
        ]);
    }
    public function edit(Pizza $pizza) {
        return Inertia::render('Pizzas/Edit', [
            'pizza' => $pizza
        ]);
    }
    public function update(Pizza $pizza, Request $request): void
    {
        $pizza->update([
            'status' => $request->status
        ]);
    }
}
