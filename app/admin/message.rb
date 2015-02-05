ActiveAdmin.register Message do 

  actions :index, :show
  controller do
    def permitted_params
      params.permit!
    end
  end

  filter :name
  filter :email

  index do
    column :name
    column :email

    actions
  end

  show do |ad| 
    attributes_table do 
      row :name
      row :email
      row :message

    end
  end
 


end