json.array!(@posts) do |post|
  json.extract! post, :id, :title, :subtitle, :author, :content, :publish
  json.url post_url(post, format: :json)
end
