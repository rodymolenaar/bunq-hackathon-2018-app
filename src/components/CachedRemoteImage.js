import React from 'react'
import { AsyncStorage } from 'react-native'
import withHttp from './../withHttp'
import { Buffer } from 'buffer'
import { ActivityIndicator, View } from 'react-native'

class CachedRemoteImage extends React.Component {

    state = {
        imageData: null,
        loading: false,
    }

    componentWillReceiveProps(newProps) {
        const { url } = newProps

        if (url === undefined || !url || url === this.props.url) {
            return
        }

        this.fetchImage(url).catch((error) => {})
    }

    componentDidMount() {
        const { url } = this.props

        if (url === undefined || !url) {
            return
        }

        this.fetchImage(url).catch((error) => {})
    }

    render() {
        const {imageData, loading} = this.state

        if (this.props.showLoadingIndicator === true && loading === true) {
            return (
                <View style={{padding: 15}}>
                    <ActivityIndicator size="small" />
                </View>
            )
        }

        return imageData !== null ? this.props.render(this.state.imageData) : null
    }

    async fetchImage(url) {
        this.setState({loading: true})

        const imageFromCache = await this.imageFromCache(url)
        if (imageFromCache) {
            this.setState({imageData: this.toImageSource(imageFromCache), loading: false})
            return
        }

        this.props.http.get(url, { responseType: 'arraybuffer' })
            .then((response) => response.data).then((data) => {
            const base64 = new Buffer(data, 'binary').toString('base64')

            return `data:image/png;base64,${base64}`
        })
    }

    async imageFromCache(url) {
        return await AsyncStorage.getItem(`cached_image.${url}`)
    }

    async saveToCache(url, base64) {
        await AsyncStorage.setItem(`cached_image.${url}`, base64)
    }

    toImageSource(base64) {
        return `data:image/png;base64,${base64}`
    }
}

export default withHttp()(CachedRemoteImage)