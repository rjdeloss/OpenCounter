class SessionsController < ApplicationController
    def new
    end

    def create
        user = User.find_by_credentials(params[:user][:username],params[:user][:password])
        if user
            login(user)
            redirect_to :index
        else 
            flash.now[:errors] = [`incorrect username/password`]
            render :new
    end

    def destroy
        logout
        redirect_to new_session_url
    end
end