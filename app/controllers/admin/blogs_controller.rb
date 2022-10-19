class Admin::BlogsController < ApplicationController
  before_action  :set_blog_by_id, only: [:edit, :update, :destroy, :show]
  def index
     @blogs = Blog.order(created_at: "desc")
   end

   def new
     @blog = Blog.new
   end

   def create
    @blog = Blog.new(blog_params)
    if @blog.save
      redirect_to admin_blogs_path
    else
      render :new
      flash[:alert] ="Not Created! "
    end
   end

   def update
      if @blog.update_attributes(blog_params)
       redirect_to admin_blogs_path
      else
      render :edit
      flash[:alert] ="Not Updated!"
     end
   end

   def edit
   end

   def show
   end

   def destroy
     if @blog.destroy
      redirect_to admin_blogs_path
    else
      flash[:alert] = "blog not destroyed "
    end

   end

  private

  def set_blog_by_id
    @blog = Blog.find(params[:id])
  end

   def blog_params
    params.require(:blog).permit(:title, :content, :image)
   end
end
