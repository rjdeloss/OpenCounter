class Api::CuisinesController < ApplicationController
    def index 
        @cuisines = Cuisine.all
    end
end