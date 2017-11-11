var Item = React.createClass({ 
    
    getInitialState() {
        return {editable: false}
    },
    
    handleEdit() {
        if(this.state.editable) { 
            var title = this.refs.name.value; 
            var description = this.refs.description.value;
            var author = this.refs.author.value;
            var tag = this.refs.tag.value;
            var created_at = this.refs.created_at.value;
            var updated_at = this.refs.updated_at.value;
            var item = {id: id , title: title , description: description, author: author, tag: tag, created_at: created_at, updated_at: updated_at}; 
            this.props.handleUpdate(item);
        } 
        
        this.setState({ editable: !this.state.editable })
    },
    
    render() { 
        
        var title = this.state.editable ? <input type='text' ref='title' defaultValue={this.props.title.title} /> : <h3>{this.props.item.title}</h3>; 
        
        var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description} : <p>{this.props.item.description}</p>;
        
        var author = this.state.editable ? <input type='text' ref='autor' defaultValue={this.props.item.author} /> : <h3>{this.props.item.author}</h3>; 
        
        var tag = this.state.editable ? <input type='text' ref='tag' defaultValue={this.props.item.tag} /> : <h3>{this.props.item.tag}</h3>; 
        
        var created_at = this.state.editable ? <input type='text' ref='creaed_at' defaultValue={this.props.item.created_at} /> : <h3>{this.props.item.created_at}</h3>; 
        
        var updated_at = this.state.editable ? <input type='text' ref='updated_at' defaultValue={this.props.item.updated_at} /> : <h3>{this.props.item.updated_at}</h3>;
                                                    
                                                    
                                                    
        return ( 
            <div> 
                {title}
                {description}
                {author}
                {tag}
                {created_at}
                {updated_at}
                <button onClick={this.props.handleDelete} >Delete</button> 
                <button onClick={this.handleEdit}> {this.state.editable ? 'Submit' : 'Edit' } </button>
            </div> 
        ) 
    } 
});
