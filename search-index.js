crystal_doc_search_index_callback({"repository_name":"ava","body":"# Ava Aware Client API in Crystal\n\nA client API for Ava Aware written in Crystal.\n\n## Installation\n\n1. Add the dependency to your `shard.yml`:\n\n   ```yaml\n   dependencies:\n     ava:\n       github: emerconghaile/ava.cr\n   ```\n\n2. Run `shards install`\n\n## Usage\n\n```crystal\nrequire \"ava\"\n```\n\nTODO: Write usage instructions here\n\n## Development\n\nTODO: Write development instructions here\n\n## Contributing\n\n1. Fork it (<https://github.com/emerconghaile/ava.cr/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [Emer Conghaile](https://github.com/emerconghaile) - creator and maintainer\n- [Alex Piechowski](https://github.com/grepsedawk) - absolute legend\n","program":{"html_id":"ava/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"locations":[],"repository_name":"ava","program":true,"enum":false,"alias":false,"const":false,"types":[{"html_id":"ava/Ava","path":"Ava.html","kind":"module","full_name":"Ava","name":"Ava","abstract":false,"ancestors":[{"html_id":"ava/Habitat/SettingsHelpers","kind":"module","full_name":"Habitat::SettingsHelpers","name":"SettingsHelpers"},{"html_id":"ava/Habitat/TempConfig","kind":"module","full_name":"Habitat::TempConfig","name":"TempConfig"}],"locations":[{"filename":"src/ava.cr","line_number":9,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava.cr#L9"},{"filename":"src/ava/client.cr","line_number":1,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/client.cr#L1"}],"repository_name":"ava","program":false,"enum":false,"alias":false,"const":false,"constants":[{"id":"HABITAT_SETTINGS","name":"HABITAT_SETTINGS","value":"[{decl: base_url : String, example: nil, validation: nil}, {decl: username : String, example: nil, validation: nil}, {decl: password : String, example: nil, validation: nil}] of Nil"},{"id":"VERSION","name":"VERSION","value":"\"0.1.0\""}],"included_modules":[{"html_id":"ava/Habitat/SettingsHelpers","kind":"module","full_name":"Habitat::SettingsHelpers","name":"SettingsHelpers"},{"html_id":"ava/Habitat/TempConfig","kind":"module","full_name":"Habitat::TempConfig","name":"TempConfig"}],"doc":"TODO: Write documentation for `Ava`","summary":"<p><span class=\"flag orange\">TODO</span>  Write documentation for <code><a href=\"Ava.html\">Ava</a></code></p>","class_methods":[{"html_id":"configure(&)-class-method","name":"configure","abstract":false,"location":{"filename":"src/ava.cr","line_number":12,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava.cr#L12"},"def":{"name":"configure","yields":1,"visibility":"Public","body":"yield settings"}},{"html_id":"settings-class-method","name":"settings","abstract":false,"location":{"filename":"src/ava.cr","line_number":12,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava.cr#L12"},"def":{"name":"settings","visibility":"Public","body":"HabitatSettings"}}],"instance_methods":[{"html_id":"settings-instance-method","name":"settings","abstract":false,"location":{"filename":"src/ava.cr","line_number":12,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava.cr#L12"},"def":{"name":"settings","visibility":"Public","body":"HabitatSettings"}}],"types":[{"html_id":"ava/Ava/Client","path":"Ava/Client.html","kind":"class","full_name":"Ava::Client","name":"Client","abstract":false,"superclass":{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"ava/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/ava/client.cr","line_number":1,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/client.cr#L1"}],"repository_name":"ava","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"ava/Ava","kind":"module","full_name":"Ava","name":"Ava"},"constructors":[{"html_id":"new-class-method","name":"new","abstract":false,"location":{"filename":"src/ava/client.cr","line_number":10,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/client.cr#L10"},"def":{"name":"new","visibility":"Public","body":"_ = allocate\n_.initialize\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"html_id":"headers:HTTP::Headers-instance-method","name":"headers","abstract":false,"location":{"filename":"src/ava/client.cr","line_number":6,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/client.cr#L6"},"def":{"name":"headers","visibility":"Public","body":"@headers"}},{"html_id":"url-instance-method","name":"url","abstract":false,"location":{"filename":"src/ava/client.cr","line_number":2,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/client.cr#L2"},"def":{"name":"url","visibility":"Public","body":"\"#{Ava.settings.base_url}/api/v1/dologin\""}}]},{"html_id":"ava/Ava/HabitatSettings","path":"Ava/HabitatSettings.html","kind":"class","full_name":"Ava::HabitatSettings","name":"HabitatSettings","abstract":false,"superclass":{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"ava/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/ava.cr","line_number":12,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava.cr#L12"}],"repository_name":"ava","program":false,"enum":false,"alias":false,"const":false,"namespace":{"html_id":"ava/Ava","kind":"module","full_name":"Ava","name":"Ava"},"class_methods":[{"html_id":"base_url:String-class-method","name":"base_url","abstract":false,"def":{"name":"base_url","return_type":"String","visibility":"Public","body":"@@base_url.not_nil!"}},{"html_id":"base_url=(value:String)-class-method","name":"base_url=","abstract":false,"args":[{"name":"value","external_name":"value","restriction":"String"}],"args_string":"(value : String)","args_html":"(value : String)","def":{"name":"base_url=","args":[{"name":"value","external_name":"value","restriction":"String"}],"visibility":"Public","body":"@@base_url = value"}},{"html_id":"base_url?-class-method","name":"base_url?","doc":"Used for checking missing settings on non-nilable types\nIt's advised to use base_url in your apps to ensure\nthe propper type is checked.","summary":"<p>Used for checking missing settings on non-nilable types It's advised to use base_url in your apps to ensure the propper type is checked.</p>","abstract":false,"def":{"name":"base_url?","visibility":"Public","body":"@@base_url"}},{"html_id":"password:String-class-method","name":"password","abstract":false,"def":{"name":"password","return_type":"String","visibility":"Public","body":"@@password.not_nil!"}},{"html_id":"password=(value:String)-class-method","name":"password=","abstract":false,"args":[{"name":"value","external_name":"value","restriction":"String"}],"args_string":"(value : String)","args_html":"(value : String)","def":{"name":"password=","args":[{"name":"value","external_name":"value","restriction":"String"}],"visibility":"Public","body":"@@password = value"}},{"html_id":"password?-class-method","name":"password?","doc":"Used for checking missing settings on non-nilable types\nIt's advised to use password in your apps to ensure\nthe propper type is checked.","summary":"<p>Used for checking missing settings on non-nilable types It's advised to use password in your apps to ensure the propper type is checked.</p>","abstract":false,"def":{"name":"password?","visibility":"Public","body":"@@password"}},{"html_id":"to_h-class-method","name":"to_h","doc":"Generates a hash using the provided values","summary":"<p>Generates a hash using the provided values</p>","abstract":false,"def":{"name":"to_h","visibility":"Public","body":"{\"base_url\" => base_url, \"username\" => username, \"password\" => password}"}},{"html_id":"username:String-class-method","name":"username","abstract":false,"def":{"name":"username","return_type":"String","visibility":"Public","body":"@@username.not_nil!"}},{"html_id":"username=(value:String)-class-method","name":"username=","abstract":false,"args":[{"name":"value","external_name":"value","restriction":"String"}],"args_string":"(value : String)","args_html":"(value : String)","def":{"name":"username=","args":[{"name":"value","external_name":"value","restriction":"String"}],"visibility":"Public","body":"@@username = value"}},{"html_id":"username?-class-method","name":"username?","doc":"Used for checking missing settings on non-nilable types\nIt's advised to use username in your apps to ensure\nthe propper type is checked.","summary":"<p>Used for checking missing settings on non-nilable types It's advised to use username in your apps to ensure the propper type is checked.</p>","abstract":false,"def":{"name":"username?","visibility":"Public","body":"@@username"}}]},{"html_id":"ava/Ava/User","path":"Ava/User.html","kind":"class","full_name":"Ava::User","name":"User","abstract":false,"superclass":{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"ava/JSON/Serializable","kind":"module","full_name":"JSON::Serializable","name":"Serializable"},{"html_id":"ava/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"ava/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"src/ava/user.cr","line_number":1,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L1"}],"repository_name":"ava","program":false,"enum":false,"alias":false,"const":false,"included_modules":[{"html_id":"ava/JSON/Serializable","kind":"module","full_name":"JSON::Serializable","name":"Serializable"}],"namespace":{"html_id":"ava/Ava","kind":"module","full_name":"Ava","name":"Ava"},"class_methods":[{"html_id":"all(headers)-class-method","name":"all","abstract":false,"args":[{"name":"headers","external_name":"headers","restriction":""}],"args_string":"(headers)","args_html":"(headers)","location":{"filename":"src/ava/user.cr","line_number":12,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L12"},"def":{"name":"all","args":[{"name":"headers","external_name":"headers","restriction":""}],"visibility":"Public","body":"Array(User).from_json((HTTP::Client.get(url, headers: headers)).body)"}},{"html_id":"to_email_recipients(headers):String-class-method","name":"to_email_recipients","abstract":false,"args":[{"name":"headers","external_name":"headers","restriction":""}],"args_string":"(headers) : String","args_html":"(headers) : String","location":{"filename":"src/ava/user.cr","line_number":22,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L22"},"def":{"name":"to_email_recipients","args":[{"name":"headers","external_name":"headers","restriction":""}],"return_type":"String","visibility":"Public","body":"(all(headers)).map(&.to_recipient).join"}},{"html_id":"url-class-method","name":"url","abstract":false,"location":{"filename":"src/ava/user.cr","line_number":4,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L4"},"def":{"name":"url","visibility":"Public","body":"\"#{Ava.settings.base_url}/api/v1/users\""}}],"constructors":[{"html_id":"new(pull:JSON::PullParser)-class-method","name":"new","abstract":false,"args":[{"name":"pull","external_name":"pull","restriction":"::JSON::PullParser"}],"args_string":"(pull : JSON::PullParser)","args_html":"(pull : JSON::PullParser)","location":{"filename":"src/ava/user.cr","line_number":2,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L2"},"def":{"name":"new","args":[{"name":"pull","external_name":"pull","restriction":"::JSON::PullParser"}],"visibility":"Public","body":"new_from_json_pull_parser(pull)"}}],"instance_methods":[{"html_id":"email:String-instance-method","name":"email","abstract":false,"location":{"filename":"src/ava/user.cr","line_number":8,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L8"},"def":{"name":"email","return_type":"String","visibility":"Public","body":"@email"}},{"html_id":"email=(email:String)-instance-method","name":"email=","abstract":false,"args":[{"name":"email","external_name":"email","restriction":"String"}],"args_string":"(email : String)","args_html":"(email : String)","location":{"filename":"src/ava/user.cr","line_number":8,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L8"},"def":{"name":"email=","args":[{"name":"email","external_name":"email","restriction":"String"}],"visibility":"Public","body":"@email = email"}},{"html_id":"full_name:String-instance-method","name":"full_name","abstract":false,"location":{"filename":"src/ava/user.cr","line_number":8,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L8"},"def":{"name":"full_name","return_type":"String","visibility":"Public","body":"@full_name"}},{"html_id":"full_name=(full_name:String)-instance-method","name":"full_name=","abstract":false,"args":[{"name":"full_name","external_name":"full_name","restriction":"String"}],"args_string":"(full_name : String)","args_html":"(full_name : String)","location":{"filename":"src/ava/user.cr","line_number":8,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L8"},"def":{"name":"full_name=","args":[{"name":"full_name","external_name":"full_name","restriction":"String"}],"visibility":"Public","body":"@full_name = full_name"}},{"html_id":"to_recipient:String-instance-method","name":"to_recipient","abstract":false,"location":{"filename":"src/ava/user.cr","line_number":26,"url":"https://github.com/emerconghaile/ava.cr/blob/ec19a6e2adba77bd8ef2c708397be584a4fe7f58/src/ava/user.cr#L26"},"def":{"name":"to_recipient","return_type":"String","visibility":"Public","body":"\"#{email};\""}}]}]}]}})