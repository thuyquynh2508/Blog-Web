import { Paper } from "@mui/material";

const BlogCard = () => {
    return (
        <Paper 
      elevation={5}
      className="blog_card blog_infoCard"
    >
        <div
          className="blog_card_avatar"
          style={{
            backgroundImage: "",
          }}
        ></div>
        <div className="blog_card_info">
          <h2 className="blog_card_info_name">Hello</h2>
          <div className="blog_card_info_description">Description</div>
        </div>
        <div className="blog_card_user">
            <div className="blog_card_user_item">
            <p className="blog_card_user_item_text">USER</p>
            </div>
            <div className="blog_card_user_item_">
               <p className="blog_card_user_item_number">1</p> 
            </div>
            
        </div>
    </Paper>

    )
}

export default BlogCard;