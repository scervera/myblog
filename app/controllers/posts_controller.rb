class PostsController < ApplicationController
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  layout :resolve_layout

  respond_to :html

  def index
    @posts = Post.all
    respond_with(@posts)
  end

  def show
    @post_attachments = @post.post_attachments.all
    respond_with(@post)
  end

  def new
    @post = Post.new
    @post_attachment = @post.post_attachments.build
    respond_with(@post)
  end

  def edit
  end

  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        params[:post_attachments]['media'].each do |a|
          @post_attachment = @post.post_attachments.create!(:media => a, :post_id => @post.id)
        end
        format.html { redirect_to @post, notice: 'Post was successfully created.'}
      else
        format.html { render action: 'new' }
      end
    end
    # @post.save
    # respond_with(@post)
  end

  def update
    @post.update(post_params)
    respond_with(@post)
  end

  def destroy
    @post.destroy
    respond_with(@post)
  end

  private
    def set_post
      @post = Post.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :subtitle, :author, :content, :publish, post_attachments_attributes: [:id, :post_id, :media])
    end

    def resolve_layout
      case action_name
      when "edit", "new", "create", "index"
        "full_width"
      when "show"
        "blog_rt"
      else
        "base"
    end
  end
end
