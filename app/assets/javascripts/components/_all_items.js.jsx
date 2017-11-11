var AllItems = React.createClass({ 

    handleDelete(id) {
    this.props.handleDelete(id);
    },
    
    handleEdit() { 
        if(this.state.editable) { 
            var title = this.refs.title.value; 
            var description = this.refs.description.value; 
            var author = this.refs.author.value;
            var tag = this.refs.tag.value; 
            var created_at = this.refs.created_at.value; 
            var updated_at = this.refs.updated_at.value; 
            
            var item = {id: id , name: name , description: description};
            this.props.handleUpdate(item);
        } 
        this.setState({ editable: !this.state.editable }) 
    },
    
    onUpdate(item) {
    this.props.onUpdate(item);
    },
    
    render() { 
        var items= this.props.items.map((item) => { 
            return ( 
                <div key={item.id}> 
                    <Item item={item} 
                        handleDelete={this.handleDelete.bind(this, item.id)} 
                        handleEdit={this.handleEdit}/> 
                </div>
            ) 
        }); 
        
        return( 
            <div> 
                {items} 
            </div> 
        ) 
    }
 
});