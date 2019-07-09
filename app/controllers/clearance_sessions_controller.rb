class ClearanceSessionsController < Clearance::SessionsController

  def create
    @user = authenticate(params)

    sign_in(@user) do |status|
      respond_to do |format|
        format.html { super }
        format.json do
          if status.success? || current_user
            render json: @user || current_user, status: :ok
          else
            render json: [errors: status.failure_message], status: :unauthorized
          end
        end
      end
    end
  end
end
