class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found

    private

    def render_record_not_found(invalid)
        render json: {error: ["record not found"]}, status: :not_found
    end

end
