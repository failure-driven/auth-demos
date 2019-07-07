class DeviseSessionsController < Devise::SessionsController
  respond_to :html, :json

  private

  def respond_with(resource, _opts = {})
    respond_to do |format|
      format.html { super }
      format.json do
        render json: resource.id ? resource : current_user
      end
    end
  end
end
