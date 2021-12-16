<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 
        'price',
        'vol_pts',
        'prod_pic'
    ];

    public function product()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
}
