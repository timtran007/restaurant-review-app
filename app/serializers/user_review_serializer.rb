class UserReviewSerializer < ActiveModel::Serializer
  attributes :id, :headline, :rating, :comment, :user_name

  def user_name
    object.user.user_name
  end
end
