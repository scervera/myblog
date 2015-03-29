class PostAttachment < ActiveRecord::Base
	mount_uploader :media, MediaUploader
	belongs_to :post 
end
